import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar';
import ConversationsList from './components/conversationsList';
import ConversationDetail from './components/conversationDetail';

function App() {
  return (
    <div className="App">     
      <Sidebar />
      <ConversationsList />
      <ConversationDetail />
    </div>
  );
}

export default App;
