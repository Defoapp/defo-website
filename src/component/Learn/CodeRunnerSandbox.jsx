import React, { useState } from "react";
import { LEARN_ARTICLES } from "./learnData";

const CodeRunnerSandbox = () => {
  const [selectedTopic, setSelectedTopic] = useState(LEARN_ARTICLES[0]);
  const [activeCode, setActiveCode] = useState(LEARN_ARTICLES[0].codeSnippet);
  const [terminalOutput, setTerminalOutput] = useState(LEARN_ARTICLES[0].simulatedOutput);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setActiveCode(topic.codeSnippet);
    setTerminalOutput(topic.simulatedOutput);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTerminalOutput(`⚡ Compiling and executing ${selectedTopic.name} runtime environment...\nAllocating memory space...`);

    setTimeout(() => {
      setTerminalOutput(selectedTopic.simulatedOutput);
      setIsRunning(false);
    }, 700);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setActiveCode(selectedTopic.codeSnippet);
    setTerminalOutput(selectedTopic.simulatedOutput);
  };

  return (
    <div className="w-full my-12 p-6 md:p-8 rounded-3xl bg-[#090d16] border border-white/10 shadow-2xl relative">
      {/* Top subtle glow */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
      />

      {/* Title & language tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Code Sandbox & Execution Terminal</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Live Language Execution Console
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Switch between languages to view real-world blueprints, edit syntax live, and trigger the execution pipeline.
          </p>
        </div>

        {/* Language selector pills */}
        <div className="flex flex-wrap gap-2">
          {LEARN_ARTICLES.map((art) => (
            <button
              key={art.id}
              onClick={() => handleSelectTopic(art)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                selectedTopic.id === art.id
                  ? "bg-white/15 text-white border-white/40 shadow-lg scale-105"
                  : "bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: art.id === "python" ? "#38bdf8" : art.id === "java" ? "#f59e0b" : art.id === "html5" ? "#f43f5e" : art.id === "css3" ? "#818cf8" : art.id === "javascript" ? "#facc15" : "#34d399" }}
              />
              <span>{art.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Terminal split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Code Editor window */}
        <div className="lg:col-span-7 flex flex-col rounded-2xl bg-black/80 border border-white/10 overflow-hidden shadow-xl">
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 font-mono text-slate-400">
                main.{selectedTopic.codeLanguage === "python" ? "py" : selectedTopic.codeLanguage === "java" ? "java" : selectedTopic.codeLanguage === "html" ? "html" : selectedTopic.codeLanguage === "css" ? "css" : selectedTopic.codeLanguage === "javascript" ? "js" : "sql"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                title="Reset code"
                className="px-2 py-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-[11px]"
              >
                Reset
              </button>
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors text-[11px] flex items-center gap-1"
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          {/* Editable text area */}
          <div className="relative flex-1 p-4 bg-[#050811] font-mono text-xs text-emerald-300/90 leading-relaxed overflow-x-auto min-h-[280px]">
            <textarea
              value={activeCode}
              onChange={(e) => setActiveCode(e.target.value)}
              spellCheck="false"
              className="w-full h-full min-h-[260px] bg-transparent text-slate-200 font-mono text-xs focus:outline-none resize-none leading-relaxed selection:bg-cyan-500/30 selection:text-white"
            />
          </div>

          {/* Editor Footer / Run Action */}
          <div className="px-4 py-3 bg-slate-900/60 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-mono">
              Language: <strong className="text-white uppercase">{selectedTopic.name}</strong>
            </span>

            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 shadow-lg ${
                isRunning
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-400 to-cyan-500 text-black hover:opacity-90 hover:scale-105 active:scale-95 shadow-emerald-500/25"
              }`}
            >
              {isRunning ? (
                <>
                  <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Running...</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Run Blueprint</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Terminal Output window */}
        <div className="lg:col-span-5 flex flex-col rounded-2xl bg-black border border-white/10 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-white/10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span className="text-white font-semibold">Console Output</span>
            </div>
            <span className="text-[10px] text-slate-500">v8.4-turbo</span>
          </div>

          <div className="flex-1 p-4 bg-black/90 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[280px]">
            <pre className="text-emerald-400 whitespace-pre-wrap">{terminalOutput}</pre>
          </div>

          <div className="px-4 py-3 bg-slate-950/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Status: Ready</span>
            </span>
            <span className="text-slate-500">Zero Latency Sandbox</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeRunnerSandbox;
