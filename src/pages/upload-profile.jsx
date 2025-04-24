import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useUser } from '../context/UserContext';
import { getTextAlignment } from '../utils/languageHelper';

export default function UploadProfile() {
    const { t, i18n } = useTranslation('common');
    const textAlignClass = getTextAlignment(i18n.language);
    const router = useRouter();
    const { updateProfile } = useUser();

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        languages: [],
        skills: [],
        experience: '',
        housingNeeds: {
            roommates: false,
            furnished: false,
            maxBudget: 500
        },
        locationPreferences: [],
        servicesNeeded: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith('housing.')) {
            const housingField = name.split('.')[1];
            setFormData({
                ...formData,
                housingNeeds: {
                    ...formData.housingNeeds,
                    [housingField]: type === 'checkbox' ? checked : value
                }
            });
        } else if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleArrayInput = (e, field) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [field]: value.split(',').map(item => item.trim()).filter(item => item)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate a unique ID for the profile
        const profileWithId = {
            ...formData,
            id: `profile_${Date.now()}`
        };

        // Update the user profile in context
        updateProfile(profileWithId);

        // Redirect to matches page
        router.push('/matches');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className={`text-3xl font-bold mb-6 ${textAlignClass}`}>{t('profile.title')}</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                {/* Personal Information */}
                <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${textAlignClass}`}>{t('profile.personalInfo')}</h2>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>{t('profile.name')}</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>{t('profile.age')}</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                min="18"
                                max="100"
                                required
                            />
                        </div>

                        <div>
                            <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>{t('profile.gender')}</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Languages and Skills */}
                <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${textAlignClass}`}>{t('profile.languages')}</h2>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>
                            {t('profile.languages')} (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={formData.languages.join(', ')}
                            onChange={(e) => handleArrayInput(e, 'languages')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Arabic, English, French..."
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>
                            {t('profile.skills')} (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={formData.skills.join(', ')}
                            onChange={(e) => handleArrayInput(e, 'skills')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Cooking, Programming, Teaching..."
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>Work Experience</label>
                        <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            placeholder="Briefly describe your work experience..."
                        ></textarea>
                    </div>
                </div>

                {/* Housing Needs */}
                <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${textAlignClass}`}>{t('profile.housing')}</h2>

                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="housing.roommates"
                                checked={formData.housingNeeds.roommates}
                                onChange={handleChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className={`ml-2 text-gray-700 ${textAlignClass}`}>Willing to have roommates</label>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="housing.furnished"
                                checked={formData.housingNeeds.furnished}
                                onChange={handleChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className={`ml-2 text-gray-700 ${textAlignClass}`}>Need furnished accommodation</label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>Maximum Monthly Budget ($)</label>
                        <input
                            type="range"
                            name="housing.maxBudget"
                            value={formData.housingNeeds.maxBudget}
                            onChange={handleChange}
                            min="300"
                            max="2000"
                            step="50"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="text-center mt-2">${formData.housingNeeds.maxBudget}</div>
                    </div>
                </div>

                {/* Location and Services */}
                <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${textAlignClass}`}>{t('profile.location')}</h2>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>
                            Preferred Locations (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={formData.locationPreferences.join(', ')}
                            onChange={(e) => handleArrayInput(e, 'locationPreferences')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Downtown, University Area, Suburbs..."
                        />
                    </div>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>
                            Services Needed (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={formData.servicesNeeded.join(', ')}
                            onChange={(e) => handleArrayInput(e, 'servicesNeeded')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Language Classes, Legal Assistance, Healthcare..."
                        />
                    </div>
                </div>

                {/* Resume Upload */}
                <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${textAlignClass}`}>{t('profile.uploadResume')}</h2>

                    <div className="mb-4">
                        <label className={`block text-gray-700 mb-2 ${textAlignClass}`}>Upload your resume (optional)</label>
                        <input
                            type="file"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            accept=".pdf,.doc,.docx"
                        />
                        <p className="text-sm text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX</p>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors"
                    >
                        {t('profile.submit')}
                    </button>
                </div>
            </form>
        </div>
    );
}