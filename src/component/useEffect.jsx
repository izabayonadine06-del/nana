import React, { useEffect, useState } from 'react';
import Input from './ui/input';

function UseEffectDemo() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name ? `hello, ${name}` : 'Demo';
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-primary-300 to-primary-500">
      <div className="bg-secondary-50 rounded-2xl shadow-lg p-8 flex flex-col w-full max-w-md">
        <p className="text-sm text-secondary-200">
          Type a name, then watch the document title change.
        </p>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UseEffectDemo;
