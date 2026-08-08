import React, { useState } from 'react';
import { X, Flame, Code2, ExternalLink, Edit3, Save, CheckCircle2, User, Building } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ProfileModal({ isOpen, onClose, student, onUpdateProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: student?.name || "Sarthak",
    college: student?.college || "VJT Institute of Tech, Mumbai",
    track: student?.track || "Full Stack Development",
    github: student?.github || "https://github.com/sarthak",
    linkedin: student?.linkedin || "https://linkedin.com/in/sarthak"
  });

  if (!isOpen) return null;

  // Calculate profile completion percent dynamically
  const fields = [formData.name, formData.college, formData.track, formData.github, formData.linkedin];
  const filledFieldsCount = fields.filter(f => f && f.trim().length > 0).length;
  const completionPercent = Math.round((filledFieldsCount / 5) * 100);

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile({
      ...formData,
      profileCompletionPercent: completionPercent,
      profileComplete: completionPercent === 100
    });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#131926] border border-[#222f44] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        {/* Header Banner */}
        <div className="h-20 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 relative p-4 flex justify-between items-start">
          <span className="text-[11px] uppercase tracking-wider font-bold text-orange-200 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-mono">
            STUDENT PROOF RECORD
          </span>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-black/40 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Details */}
        <div className="px-5 pb-6 pt-0 relative">
          {/* Avatar overlap */}
          <div className="-mt-8 mb-3 flex justify-between items-end">
            <img
              src={student?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
              alt={student?.name || "Avatar"}
              className="w-16 h-16 rounded-2xl ring-4 ring-[#131926] object-cover shadow-xl"
            />
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1.5 rounded-xl bg-[#192233] hover:bg-[#222f44] border border-slate-700 text-xs font-bold text-orange-400 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>

          {/* Profile Completion Indicator */}
          <div className="mb-4 p-3 rounded-xl bg-[#192233] border border-slate-800">
            <div className="flex justify-between items-center text-xs mb-1 font-mono">
              <span className="text-slate-300 font-bold">Profile Completion</span>
              <span className="text-orange-400 font-extrabold">{completionPercent}%</span>
            </div>
            <div className="h-1.5 bg-[#090d14] rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full transition-all duration-300" style={{ width: `${completionPercent}%` }} />
            </div>
            {completionPercent < 100 && (
              <p className="text-[10px] text-slate-400 mt-1.5 font-mono">
                Complete all fields to boost public recruiter visibility.
              </p>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase font-mono block mb-1">Student Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#090d14] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                  placeholder="e.g. Sarthak Sharma"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase font-mono block mb-1">College / University</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full bg-[#090d14] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                  placeholder="e.g. IIT Bombay / VJT Institute"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase font-mono block mb-1">Active Track</label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full bg-[#090d14] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                >
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Data Science & Analytics">Data Science & Analytics</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Data Structures & Algo">Data Structures & Algo</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase font-mono block mb-1">GitHub Profile URL</label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full bg-[#090d14] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                  placeholder="https://github.com/username"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase font-mono block mb-1">LinkedIn Profile URL</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full bg-[#090d14] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 font-extrabold text-slate-950 text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-orange-500/20"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </form>
          ) : (
            <>
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  {student?.name || "Sarthak"}
                  <span className="text-emerald-400 text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                    Verified Student
                  </span>
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{student?.handle || "@sarthak"} • {student?.college}</p>
              </div>

              {/* Current Track Badge */}
              <div className="mt-3 p-3 rounded-xl bg-[#192233] border border-[#222f44] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">Active Track</p>
                    <p className="text-xs font-bold text-white">{student?.track}</p>
                  </div>
                </div>
                <span className="text-xs text-orange-400 font-bold font-mono">Day {student?.currentDay || 12} / 60</span>
              </div>

              {/* Public Links */}
              <div className="mt-3 space-y-1.5">
                <p className="text-xs font-semibold text-slate-400 font-mono">Verified Proof Links</p>
                <a
                  href={student?.github || "https://github.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-[#192233] hover:bg-[#222f44] text-slate-200 text-xs border border-slate-800 transition-colors"
                >
                  <span className="font-mono text-slate-300 text-[11px] truncate">{student?.github || "Add GitHub URL"}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                </a>
                <a
                  href={student?.linkedin || "https://linkedin.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-[#192233] hover:bg-[#222f44] text-slate-200 text-xs border border-slate-800 transition-colors"
                >
                  <span className="font-mono text-slate-300 text-[11px] truncate">{student?.linkedin || "Add LinkedIn URL"}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                </a>
              </div>

              <button
                onClick={onClose}
                className="w-full mt-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 font-bold text-slate-950 text-xs transition-colors shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                Close Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
