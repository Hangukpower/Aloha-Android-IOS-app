import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

const moodOptions = ['😊 Great', '😃 Good', '😐 Okay', '😔 Not Great', '😢 Terrible'];

const AlohaDashboard = () => {
  const [currentMood, setCurrentMood] = useState('');

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Welcome to Aloha</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-orange-100 border-orange-300">
            <CardHeader>
              <CardTitle className="text-orange-800">Daily Mood Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-orange-700">How are you feeling today?</p>
              <div className="flex flex-wrap gap-2">
                {moodOptions.map((mood) => (
                  <Button 
                    key={mood} 
                    variant={currentMood === mood ? "default" : "outline"}
                    onClick={() => setCurrentMood(mood)}
                    className={currentMood === mood ? "bg-orange-500 hover:bg-orange-600" : "text-orange-700 border-orange-400 hover:bg-orange-200"}
                  >
                    {mood}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-pink-100 border-pink-300">
            <CardHeader>
              <CardTitle className="text-pink-800">Book a Telehealth Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-pink-500 hover:bg-pink-600">
                <Calendar className="mr-2 h-4 w-4" /> Schedule Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-100 border-purple-300">
            <CardHeader>
              <CardTitle className="text-purple-800">Daily CBT Exercise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-purple-700">Today's exercise: Thought Challenge</p>
              <Button className="bg-purple-500 hover:bg-purple-600">Start Exercise</Button>
            </CardContent>
          </Card>

          <Card className="bg-red-100 border-red-300">
            <CardHeader>
              <CardTitle className="text-red-800">Meditation Reminder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-red-700">Next session: 7:00 PM</p>
              <Button variant="outline" className="text-red-700 border-red-400 hover:bg-red-200">Change Time</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlohaDashboard;
