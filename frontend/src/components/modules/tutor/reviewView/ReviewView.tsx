

"use client"

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { getOwnProfile } from '@/actions/tutor.action';

const ReviewView = () => {

const [reviews, setReviews] = useState<any>(null);

  
  useEffect(() => {
  const fetchUser = async () => {
    const data = await getOwnProfile();
    console.log(data);
    setReviews(data?.data.tutorProfile.reviews);
    
  };

  fetchUser();
}, []);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No reviews yet. Be the first to leave one!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
      <div className="grid gap-4">
        {reviews.map((review: any) => (
          <div 
            key={review.id} 
            className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {review.user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.user?.name}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-yellow-700">{review.rating}</span>
              </div>
            </div>

            <p className="text-gray-700 italic">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewView;