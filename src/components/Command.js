import React, {useEffect, useCallback} from 'react'
import "./Command.scss"
const Command = () => {
    var prevCommands = [];
    var curr;
    const handleKeyPress = useCallback((event) => {
      if (event.keyCode === 13) event.preventDefault();
      if (event.keyCode === 13 && event.target.value !== "") {
          event.preventDefault();
          prevCommands.push(event.target.value);
          event.target.disabled = true;
          var elem = document.getElementsByClassName('command')[prevCommands.length - 1];
          var clone = elem.cloneNode(true);
          clone.className = "command";
          clone.firstChild.innerHTML = "visitor@drew.com:~$&nbsp;";
          clone.firstChild.style = 'p';
          clone.firstChild.style.color = "#F1D6AB";
          event.target.value = "";
          event.target.disabled = false;
          elem.before(clone);
          // handle command
          curr = prevCommands.length;
        }
        if (event.keyCode === 38 && curr !== 0) {
          curr -= 1;
          event.target.value = prevCommands[curr];
        }
        if (event.keyCode === 40 && curr !== prevCommands.length) {
          curr += 1;
          if (prevCommands[curr] === undefined) event.target.value = "";
          else event.target.value = prevCommands[curr];
        }
    },[])
    useEffect(() => {
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      }
    }, [handleKeyPress])
    
    return (
    <div className="commmand-wrap" id="command-wrap">
    <span className="command" id="command">
        <div className='user'><p>visitor@drew.com:~$&nbsp;</p></div>
        <textarea onKeyDown={handleKeyPress} type='text' id='commandline' spellCheck='false' maxLength={15}></textarea>
    </span>
    </div>
  )
}

export default Command