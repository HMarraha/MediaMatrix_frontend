import React, { useState } from 'react';

function Srtparser() {
  const [srtData, setSrtData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split('\n');

      // Assuming each entry in SRT file is separated by an empty line
      const srtEntries = [];
      let currentEntry = '';
      let lineNumber = '';
      let timeSaid = '';

      const additionalData = {
        id: "157336",
        original_title: "Interstellar",
        overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
      };

      for (const line of lines) {
        if (line.trim() === '') {
          if (currentEntry.trim() !== '') {
            // Add the current entry to the array with the lineNumber and timeSaid
            srtEntries.push('{"index":{}}');
            srtEntries.push({
              ...additionalData,
              lineNumber,
              timeSaid,
              line: currentEntry.trim()
            });
          }
          currentEntry = '';
          lineNumber = '';
          timeSaid = '';
        } else if (!lineNumber) {
          // Extract lineNumber from the line
          lineNumber = line.trim();
        } else if (!timeSaid) {
          // Extract timeSaid from the line
          timeSaid = line.trim();
        } else {
          // Add the line to the current entry
          currentEntry += line + '\n';
        }
      }

      // Ensure the last entry is added
      if (currentEntry.trim() !== '') {
        srtEntries.push('{"index":{}}');
        srtEntries.push({
          ...additionalData,
          lineNumber,
          timeSaid,
          line: currentEntry.trim()
        });
      }

      // Convert objects to JSON strings
      const srtEntriesStrings = srtEntries.map(entry => 
        typeof entry === 'string' ? entry : JSON.stringify(entry)
      );

      setSrtData(srtEntriesStrings);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <ul>
        {srtData.map((entry, index) => (
          <li key={index}>{entry}<br/></li>
        ))}
      </ul>
    </div>
  );
}

export default Srtparser;