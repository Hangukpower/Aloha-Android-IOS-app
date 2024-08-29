import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BarChart, Brain, Sunrise } from 'lucide-react';

const moodOptions = ['😊 Great', '😃 Good', '😐 Okay', '😔 Not Great', '😢 Terrible'];

const AlohaApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentMood, setCurrentMood] = useState('');

  const renderPage = () => {
    switch (currentPage) {
      case 'mood':
        return (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-orange-600">Daily Mood Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg text-orange-700">How are you feeling today?</p>
              <div className="flex flex-col gap-2">
                {moodOptions.map((mood) => (
                  <Button 
                    key={mood} 
                    variant={currentMood === mood ? "default" : "outline"}
                    onClick={() => setCurrentMood(mood)}
                    className={`text-lg py-3 ${currentMood === mood ? "bg-orange-500 text-white" : "text-orange-600 border-orange-300"}`}
                  >
                    {mood}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      case 'appointment':
        return (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-pink-600">Book a Telehealth Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg text-pink-700">Choose a convenient time for your session.</p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-3">
                <Calendar className="mr-2 h-5 w-5" /> Schedule Now
              </Button>
            </CardContent>
          </Card>
        );
      case 'cbt':
        return (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-600">Daily CBT Exercise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg text-purple-700">Today's exercise: Thought Challenge</p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg py-3">Start Exercise</Button>
            </CardContent>
          </Card>
        );
      case 'meditation':
        return (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-red-600">Meditation Reminder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg text-red-700">Next session: 7:00 PM</p>
              <Button variant="outline" className="w-full text-red-600 border-red-300 hover:bg-red-50 text-lg py-3">Change Time</Button>
            </CardContent>
          </Card>
        );
      default:
        return (
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: BarChart, label: 'Mood Tracker', color: 'text-orange-500', page: 'mood' },
              { icon: Calendar, label: 'Book Appointment', color: 'text-pink-500', page: 'appointment' },
              { icon: Brain, label: 'CBT Exercise', color: 'text-purple-500', page: 'cbt' },
              { icon: Sunrise, label: 'Meditation', color: 'text-red-500', page: 'meditation' }
            ].map((item) => (
              <Button
                key={item.page}
                className={`flex flex-col items-center justify-center h-32 ${item.color} bg-white hover:bg-gray-50`}
                onClick={() => setCurrentPage(item.page)}
              >
                <item.icon className="h-8 w-8 mb-2" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-white" style={{ fontFamily: 'cursive, san-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Aloha
        </h1>
        {renderPage()}
        {currentPage !== 'home' && (
          <Button 
            className="mt-4 bg-white text-purple-600 hover:bg-gray-100"
            onClick={() => setCurrentPage('home')}
          >
            Back to Home
          </Button>
        )}
      </div>
    </div>
  );
};

export default AlohaApp;
