import React, {useEffect, useCallback} from 'react'
import "./Command.scss"
const Command = () => {
    var prevCommands = [];
    var curr;

    const handleKeyPress = useCallback((event) => {
        if (event.keyCode === 13 && event.target.value !== "") {
          prevCommands.push(event.target.value);
          // handle command
          // add line
          curr = prevCommands.length;
          event.target.value = "";
        }
        if (event.keyCode === 38 && curr !== 0) {
          --curr;
          event.target.value = prevCommands[curr];
        }
        if (event.keyCode === 40 && curr !== prevCommands.length) {
          ++curr;
          if (prevCommands[curr] === undefined) event.target.value = "";
          else event.target.value = prevCommands[curr];
        }
    })
    useEffect(() => {
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      }
    }, [handleKeyPress])
    
    return (
    <div className="command">
        <textarea onKeyDown={handleKeyPress} type='text' id='commandline'></textarea>
    </div>
  )
}

export default Command