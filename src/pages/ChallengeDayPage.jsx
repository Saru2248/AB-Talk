import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Sparkles, AlertCircle, Trophy, ChevronRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { challengeDaysMap } from '../data/mockData';
import { validateGithubUrl, validateLinkedinUrl } from '../utils/storage';
import ProofCard from '../components/ProofCard';

export default function ChallengeDayPage({ proofs = {}, updateProof, completeDay, student = {} }) {
  const { dayId } = useParams();
  const navigate = useNavigate();

  const currentDayNum = parseInt(dayId || '12', 10);
  const dayData = challengeDaysMap[currentDayNum] || challengeDaysMap[12];
  const storedProof = proofs[currentDayNum] || {};

  // Form Inputs State (persisted in localStorage)
  const [githubUrl, setGithubUrl] = useState(storedProof.github || '');
  const [linkedinUrl, setLinkedinUrl] = useState(storedProof.linkedin || '');

  // Verification & Loading States
  const [githubVerified, setGithubVerified] = useState(storedProof.githubVerified || false);
  const [linkedinVerified, setLinkedinVerified] = useState(storedProof.linkedinVerified || false);
  
  const [isVerifyingGithub, setIsVerifyingGithub] = useState(false);
  const [isVerifyingLinkedin, setIsVerifyingLinkedin] = useState(false);
  
  const [githubError, setGithubError] = useState('');
  const [linkedinError, setLinkedinError] = useState('');
  const [formError, setFormError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(storedProof.completed || false);

  // Sync stored proof changes
  useEffect(() => {
    if (storedProof.github && !githubUrl) setGithubUrl(storedProof.github);
    if (storedProof.linkedin && !linkedinUrl) setLinkedinUrl(storedProof.linkedin);
    if (storedProof.githubVerified) setGithubVerified(true);
    if (storedProof.linkedinVerified) setLinkedinVerified(true);
    if (storedProof.completed) setIsCompleted(true);
  }, [storedProof, currentDayNum]);

  // Handle GitHub Verification Simulation
  const handleVerifyGithub = () => {
    setGithubError('');
    const validation = validateGithubUrl(githubUrl);
    if (!validation.valid) {
      setGithubError(validation.error);
      return;
    }

    setIsVerifyingGithub(true);
    setTimeout(() => {
      setIsVerifyingGithub(false);
      setGithubVerified(true);
      if (updateProof) {
        updateProof(currentDayNum, {
          github: githubUrl,
          githubVerified: true
        });
      }
    }, 600);
  };

  // Handle LinkedIn Verification Simulation
  const handleVerifyLinkedin = () => {
    setLinkedinError('');
    const validation = validateLinkedinUrl(linkedinUrl);
    if (!validation.valid) {
      setLinkedinError(validation.error);
      return;
    }

    setIsVerifyingLinkedin(true);
    setTimeout(() => {
      setIsVerifyingLinkedin(false);
      setLinkedinVerified(true);
      if (updateProof) {
        updateProof(currentDayNum, {
          linkedin: linkedinUrl,
          linkedinVerified: true
        });
      }
    }, 600);
  };

  // Handle Final Submission
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!githubVerified) {
      setFormError('Please verify your GitHub URL first.');
      return;
    }
    if (!linkedinVerified) {
      setFormError('Please verify your LinkedIn post URL first.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
      if (completeDay) completeDay(currentDayNum);
      if (updateProof) {
        updateProof(currentDayNum, {
          github: githubUrl,
          linkedin: linkedinUrl,
          githubVerified: true,
          linkedinVerified: true,
          completed: true
        });
      }

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }
    }, 700);
  };

  const verifiedCount = (githubVerified ? 1 : 0) + (linkedinVerified ? 1 : 0);
  const isBothVerified = githubVerified && linkedinVerified;

  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 pb-24 px-4 sm:px-6 max-w-4xl mx-auto pt-4">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-4">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white bg-[#131926] border border-[#222f44] px-3 py-1.5 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="text-right font-mono">
          <div className="text-xs font-bold text-orange-400">
            DAY {dayData.day} OF 60
          </div>
          <div className="text-[10px] text-slate-400">
            {Math.round((dayData.day / 60) * 100)}% Progress
          </div>
        </div>
      </div>

      {/* Header Progress Bar */}
      <div className="h-1.5 bg-[#131926] rounded-full overflow-hidden mb-6 border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300"
          style={{ width: `${(dayData.day / 60) * 100}%` }}
        />
      </div>

      {/* Desktop 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Left Task Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* ================= DAY INTRO ================= */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-mono font-bold border border-orange-500/30">
                {dayData.difficulty || 'Intermediate'}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                {dayData.estimatedTime || '60–90 min'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {dayData.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-mono">
              {dayData.subtitle || "Turn today's requirements into a small working product."}
            </p>
          </div>

          {/* ================= TODAY'S MISSION ================= */}
          <div className="glass-card p-5 rounded-2xl border border-[#222f44] space-y-4">
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-orange-400 font-mono mb-1">
                TODAY'S MISSION
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {dayData.description}
              </p>
            </div>

            {/* MUST HAVE */}
            {dayData.mustHave && (
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  MUST HAVE:
                </h3>
                <div className="space-y-1.5">
                  {dayData.mustHave.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BONUS */}
            {dayData.bonus && (
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                  BONUS (OPTIONAL):
                </h3>
                <div className="space-y-1.5">
                  {dayData.bonus.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-amber-200/90">
                      <span className="text-amber-400 font-mono font-bold shrink-0">+</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= TECHNICAL EXPECTATIONS ================= */}
          <div className="glass-card p-4 rounded-xl border border-[#222f44]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-300 font-mono uppercase">Suggested Stack</span>
              <span className="text-[10px] text-orange-400 font-mono">Flexible Choice</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              {(dayData.suggestedStack || ["React", "Node.js", "Express", "PostgreSQL"]).map((tech, idx) => (
                <span key={idx} className="text-xs bg-[#192233] border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg font-mono">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 italic">
              “{dayData.stackNote || "Suggested — use any stack you're comfortable with."}”
            </p>
          </div>
        </div>

        {/* Right Submission Column */}
        <div className="lg:col-span-5 space-y-5">
          {/* ================= PROOF SUBMISSION FORM ================= */}
          <div className="glass-card-accent p-5 rounded-2xl border border-orange-500/30 shadow-xl">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-orange-400 font-mono flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                SHOW YOUR PROOF
              </h2>
              <span className="text-xs font-mono font-bold text-slate-300">
                {verifiedCount} of 2 Proofs
              </span>
            </div>
            <p className="text-xs text-slate-300 mb-5">
              Your build counts when you submit the proof. Both GitHub code and LinkedIn post are required.
            </p>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleFinalSubmit} className="space-y-4">
              {/* Modular GITHUB Proof Card */}
              <ProofCard
                type="github"
                label="GitHub Repository / Commit"
                placeholder="https://github.com/username/project"
                value={githubUrl}
                onChange={(e) => {
                  setGithubUrl(e.target.value);
                  if (githubVerified) setGithubVerified(false);
                  if (githubError) setGithubError('');
                }}
                onVerify={handleVerifyGithub}
                isVerifying={isVerifyingGithub}
                isVerified={githubVerified}
                error={githubError}
              />

              {/* Modular LINKEDIN Proof Card */}
              <ProofCard
                type="linkedin"
                label="LinkedIn Post"
                placeholder="https://www.linkedin.com/posts/..."
                value={linkedinUrl}
                onChange={(e) => {
                  setLinkedinUrl(e.target.value);
                  if (linkedinVerified) setLinkedinVerified(false);
                  if (linkedinError) setLinkedinError('');
                }}
                onVerify={handleVerifyLinkedin}
                isVerifying={isVerifyingLinkedin}
                isVerified={linkedinVerified}
                error={linkedinError}
              />

              {/* PRIMARY SUBMISSION BUTTON */}
              <button
                type="submit"
                disabled={!isBothVerified || isSubmitting}
                className={`w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xl cursor-pointer ${
                  isCompleted || isBothVerified
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-emerald-500/20'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Locking Daily Proof...
                  </span>
                ) : isCompleted ? (
                  <span className="flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-4 h-4" /> ✓ DAY {dayData.day} COMPLETE
                  </span>
                ) : !isBothVerified ? (
                  <span className="font-mono text-slate-400 text-xs">
                    {verifiedCount} of 2 Proofs Submitted (Verify Both First)
                  </span>
                ) : (
                  <span>Submit Today's Proof</span>
                )}
              </button>
            </form>
          </div>

          {/* ================= COMPLETED SUCCESS CARD & NEXT DAY PREVIEW ================= */}
          {isCompleted && (
            <div className="glass-card p-5 rounded-2xl border border-emerald-500/40 text-center animate-in fade-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-white">✓ DAY {dayData.day} COMPLETE</h3>
              <p className="text-xs text-slate-300 mt-1">
                Proof submitted. You showed up today.
              </p>

              {/* NEXT DAY PREVIEW */}
              <div className="mt-4 p-4 rounded-xl bg-[#192233] border border-[#222f44] text-left">
                <div className="flex items-center justify-between text-xs font-mono text-orange-400 mb-1">
                  <span className="font-bold uppercase">Tomorrow</span>
                  <span>Day 13</span>
                </div>
                <h4 className="text-sm font-bold text-white">Build a Personal Expense Tracker</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Come back tomorrow and keep the streak alive.</p>

                <button
                  onClick={() => navigate('/dashboard')}
                  className="mt-3 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 font-bold text-slate-950 text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-orange-500/20"
                >
                  <span>VIEW TOMORROW'S CHALLENGE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
