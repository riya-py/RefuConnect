import * as tf from '@tensorflow/tfjs';

/**
 * AI-powered matching algorithm using TensorFlow.js
 */
class Matcher {
  constructor() {
    this.initialized = false;
    this.initialize();
  }

  async initialize() {
    try {
      // In a real implementation, we would load pre-trained models here
      // For this demo, we'll use a simplified approach
      this.initialized = true;
      console.log('Matcher initialized successfully');
    } catch (error) {
      console.error('Failed to initialize matcher:', error);
    }
  }

  /**
   * Calculate similarity between profile and opportunity
   * @param {Object} profile - User profile
   * @param {Object} opportunity - Job, housing, or service opportunity
   * @returns {number} - Similarity score (0-100)
   */
  calculateSimilarity(profile, opportunity) {
    // Simple implementation for demo purposes
    let score = 0;
    
    // Check if opportunity type matches user needs
    if (opportunity.type === 'job' && profile.skills) {
      // Check for skill matches
      const matchedSkills = opportunity.requirements?.filter(
        req => profile.skills.some(skill => 
          skill.toLowerCase().includes(req.toLowerCase()) || 
          req.toLowerCase().includes(skill.toLowerCase())
        )
      );
      
      if (matchedSkills && opportunity.requirements) {
        score += (matchedSkills.length / opportunity.requirements.length) * 50;
      }
    } else if (opportunity.type === 'housing' && profile.housingNeeds) {
      // Check housing preferences
      if (profile.locationPreferences?.includes(opportunity.location)) {
        score += 30;
      }
      
      if (opportunity.price && profile.housingNeeds.maxBudget) {
        const priceValue = parseInt(opportunity.price.replace(/\D/g, ''));
        if (priceValue <= profile.housingNeeds.maxBudget) {
          score += 40;
        }
      }
      
      if (profile.housingNeeds.furnished && opportunity.amenities?.includes('Furnished')) {
        score += 20;
      }
    } else if (opportunity.type === 'service' && profile.servicesNeeded) {
      // Check if service matches needed services
      const serviceMatches = profile.servicesNeeded.some(
        service => opportunity.title.toLowerCase().includes(service.toLowerCase())
      );
      
      if (serviceMatches) {
        score += 70;
      }
    }
    
    // Location preference bonus
    if (profile.locationPreferences?.includes(opportunity.location)) {
      score += 10;
    }
    
    // Add some randomness for demo variety
    score += Math.random() * 10;
    
    // Cap at 100
    return Math.min(Math.round(score), 100);
  }

  /**
   * Find matches for a user profile
   * @param {Object} profile - User profile
   * @param {Array} opportunities - Available opportunities
   * @returns {Array} - Sorted matches with scores
   */
  findMatches(profile, opportunities) {
    if (!this.initialized) {
      console.warn('Matcher not initialized yet');
      return [];
    }
    
    const matches = opportunities.map(opportunity => {
      const matchScore = this.calculateSimilarity(profile, opportunity);
      return {
        ...opportunity,
        matchScore
      };
    });
    
    // Sort by match score (descending)
    return matches.sort((a, b) => b.matchScore - a.matchScore);
  }
}

export default new Matcher();