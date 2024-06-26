import React from 'react';

import { useTerminalState, useShell } from '@/app/providers';

export const TerminalInput = React.forwardRef(({}, ref) => {
  const { setShowWelcome, inputs, setInputs, outputs, setOutputs, inputIndex, setInputIndex } =
    useTerminalState();
  const [input, setInput] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { execute, prompt } = useShell();

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const inputsLength = inputs.length;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const output = execute(input);
      const shouldClear = Array.isArray(output) && output.length === 0;
      setShowWelcome((prev) => prev && !shouldClear);
      setInputs(!shouldClear ? [...inputs, `${prompt} ${input}`] : []);
      setOutputs(!shouldClear ? [...outputs, output] : []);
      setInputIndex(inputsLength);
      setInput('');
      setInputText('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setInput(inputs[inputIndex] || '');
      setInputText(inputs[inputIndex] || '');
      const newIndex = inputIndex - 1 < 0 ? 0 : inputIndex - 1;
      if (newIndex >= 0) setInputIndex(newIndex);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = inputIndex + 1 > inputsLength ? inputsLength : inputIndex + 1;
      if (newIndex < inputs.length) setInputIndex(newIndex);
      setInput(inputs[newIndex] || '');
      setInputText(inputs[newIndex] || '');
    }
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    if (e.target.innerText === '') setInputIndex(inputs.length - 1);
    setInput(e.target.innerText);
  };

  const setInputText = (target: string) => {
    if (inputRef.current) {
      inputRef.current.innerText = target;
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(inputRef.current);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  return (
    <div className='bg-transparent outline-none resize-none break-all'>
      {prompt ? <span className='mr-[1ch]'>{prompt}</span> : null}
      <span
        contentEditable
        ref={inputRef}
        onInput={handleChange}
        onKeyDown={handleKeyDown}
        content={input}
        className='bg-transparent outline-none'
        autoFocus
      />
    </div>
  );
});
TerminalInput.displayName = 'TerminalInput';
