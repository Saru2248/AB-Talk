import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Flame, Sparkles, Terminal, Code2, Cpu, BarChart3, Cloud, Layers } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';
import { tracksData, landingStats } from '../data/mockData';

export default function LandingPage() {
  const [selectedTrack, setSelectedTrack] = useState('fullstack');

  // Generate 60 cells for visual grid
  const daysArray = Array.from({ length: 60 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 pb-24 md:pb-12">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-8 pb-12 px-4 sm:px-6 max-w-4xl mx-auto text-center overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Small Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold font-mono tracking-wider uppercase mb-5 animate-pulse-glow">
          <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
          <span>THE 60-DAY CODING CHALLENGE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
          Build for 60 days. <br />
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            Become impossible to ignore.
          </span>
        </h1>

        {/* Alternative Supporting Hook */}
        <p className="text-sm sm:text-base text-orange-400 font-semibold mb-3 font-mono">
          Stop collecting tutorials. Start collecting proof.
        </p>

        {/* Supporting Paragraph */}
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
          Build something every day, document your progress, and create a public record of what you can actually do. Designed for Indian college students.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 font-bold text-slate-950 text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all active:scale-95 group"
          >
            <span>Start the 60-Day Challenge</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#131926] hover:bg-[#192233] border border-[#222f44] text-slate-200 text-sm font-semibold flex items-center justify-center transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* Sophisticated 60-Day Visual Journey Bar & Sample Cells */}
        <div className="glass-card p-4 rounded-2xl border border-[#222f44] max-w-lg mx-auto text-left">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-orange-400 font-bold">DAY 01</span>
            <div className="h-1 flex-1 mx-3 bg-slate-800 rounded-full overflow-hidden flex">
              <div className="w-[20%] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
            </div>
            <span className="text-slate-400">DAY 60</span>
          </div>

          <div className="grid grid-cols-12 gap-1.5 pt-1">
            {daysArray.slice(0, 24).map((d) => {
              const isCompleted = d <= 11;
              const isCurrent = d === 12;
              return (
                <div
                  key={d}
                  title={`Day ${d}`}
                  className={`h-4 rounded-[3px] transition-all ${
                    isCompleted
                      ? 'bg-orange-500'
                      : isCurrent
                      ? 'bg-amber-400 ring-2 ring-orange-400 ring-offset-1 ring-offset-[#090d14] animate-pulse'
                      : 'bg-[#1e293b]/70'
                  }`}
                />
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-2.5 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-500" /> 11 Days Verified
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" /> Day 12 Active Today
            </span>
          </div>
        </div>
      </section>

      {/* ================= TRUST / SOCIAL PROOF ================= */}
      <section className="py-10 border-y border-[#1e293b] bg-[#0c121d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-300 max-w-xl mx-auto mb-6">
            “Built for students who want to stop saying <span className="text-orange-400">‘I’m learning’</span> and start showing what they built.”
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {landingStats.map((stat, idx) => (
              <div key={idx} className="glass-card p-3 sm:p-4 rounded-xl border border-[#222f44]">
                <div className="text-lg sm:text-2xl font-extrabold text-white font-mono">{stat.value}</div>
                <div className="text-xs font-semibold text-orange-400 mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-slate-400 mt-1 hidden sm:block">{stat.note}</div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 mt-3 font-mono">
            *Illustrative metrics representing target batch goal over 60 days
          </p>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="py-12 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-400 font-mono">SIMPLE SYSTEM</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How ABTalks Works</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Three clear steps from day zero to hiring visibility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card p-5 rounded-2xl border border-[#222f44] relative group hover:border-orange-500/40 transition-colors">
            <span className="text-3xl font-extrabold text-orange-500/30 font-mono absolute top-4 right-4">01</span>
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wide">CHOOSE YOUR TRACK</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Pick the skill path you want to commit to. From Full Stack to AI or DSA.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-[#222f44] relative group hover:border-orange-500/40 transition-colors">
            <span className="text-3xl font-extrabold text-orange-500/30 font-mono absolute top-4 right-4">02</span>
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wide">BUILD EVERY DAY</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Complete one practical challenge every single day in 60–90 minutes.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-[#222f44] relative group hover:border-orange-500/40 transition-colors">
            <span className="text-3xl font-extrabold text-orange-500/30 font-mono absolute top-4 right-4">03</span>
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wide">SHOW YOUR PROOF</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Submit your GitHub code link and LinkedIn post to lock in your daily streak.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY 60 DAYS? ================= */}
      <section className="py-12 px-4 max-w-4xl mx-auto bg-[#0c121d] rounded-3xl border border-[#1e293b] my-4">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-400 font-mono">PHILOSOPHY</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Consistency beats motivation.</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
            “You don't need to become an expert in 60 days. You need to become someone who shows up for 60 days.”
          </p>
        </div>

        {/* 60-Cell Complete Visual Grid */}
        <div className="glass-card p-4 sm:p-6 rounded-2xl border border-[#222f44]">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold text-white font-mono">60-DAY PROGRESS VISUALIZER</span>
            <span className="text-orange-400 font-mono text-[11px]">20% Complete</span>
          </div>

          <div className="grid grid-cols-10 sm:grid-cols-12 gap-1.5">
            {daysArray.map((d) => {
              const isDone = d <= 11;
              const isToday = d === 12;
              return (
                <div
                  key={d}
                  className={`aspect-square rounded-md flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                    isDone
                      ? 'bg-orange-500/90 text-slate-950 shadow-sm'
                      : isToday
                      ? 'bg-amber-400 text-slate-950 ring-2 ring-orange-500 scale-105 animate-pulse'
                      : 'bg-[#192233] text-slate-500 border border-slate-800'
                  }`}
                >
                  {d < 10 ? `0${d}` : d}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-slate-400 pt-2 border-t border-[#222f44]">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-orange-500" />
              <span>Completed ({11})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-amber-400 animate-pulse" />
              <span>Current Day ({12})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#192233] border border-slate-700" />
              <span>Upcoming ({48})</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT COUNTS AS PROOF ================= */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-400 font-mono">ACCOUNTABILITY</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">What Counts as Proof</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Every single day ends with mandatory double proof of work.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card p-5 rounded-2xl border border-[#222f44]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">GITHUB</h3>
                <p className="text-xs text-orange-400 font-mono">“Show what you built.”</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Submit your repository link or active commit hash. Recruiter visibility starts with real code in public repos.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-[#222f44]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">LINKEDIN</h3>
                <p className="text-xs text-blue-400 font-mono">“Show that you showed up.”</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Post a concise update detailing what you built today. Build public momentum and connect with fellow builders.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRACK SELECTION ================= */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-400 font-mono">CHOOSE YOUR PATH</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Selectable Coding Tracks</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Tailored 60-day roadmaps designed for immediate industry skills.</p>
        </div>

        <div className="space-y-3">
          {tracksData.map((t) => {
            const isSelected = selectedTrack === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setSelectedTrack(t.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#192233] border-orange-500 shadow-lg shadow-orange-500/10'
                    : 'glass-card border-[#222f44] hover:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'bg-orange-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {t.id === 'fullstack' && <Layers className="w-5 h-5" />}
                    {t.id === 'datascience' && <BarChart3 className="w-5 h-5" />}
                    {t.id === 'aiml' && <Cpu className="w-5 h-5" />}
                    {t.id === 'devops' && <Cloud className="w-5 h-5" />}
                    {t.id === 'dsa' && <Code2 className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-sm">{t.name}</h3>
                      {t.popular && (
                        <span className="text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full font-bold">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">{t.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {t.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:flex-col sm:items-end shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-800">
                  <span className="text-xs font-bold text-orange-400 font-mono">{t.dailyEffort}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{t.studentsCount}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card-accent p-8 rounded-3xl border border-orange-500/30 relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Your next 60 days are going to pass anyway.
          </h2>
          <p className="text-base sm:text-xl font-bold text-orange-400 mt-2 font-mono">
            Make them count.
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              to="/dashboard"
              className="px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 font-extrabold text-slate-950 text-base flex items-center gap-2 shadow-xl shadow-orange-500/30 transition-transform active:scale-95"
            >
              <span>Start Building Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
