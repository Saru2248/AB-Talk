import { useState, useEffect } from 'react';
import { getStoredState, saveStoredState, initialMockState } from '../utils/storage';

export function useProgress() {
  const [state, setState] = useState(() => getStoredState());

  useEffect(() => {
    saveStoredState(state);
  }, [state]);

  const updateProof = (dayNumber, proofData) => {
    setState(prev => {
      const updatedProofs = {
        ...prev.proofs,
        [dayNumber]: {
          ...(prev.proofs[dayNumber] || {}),
          ...proofData
        }
      };
      return {
        ...prev,
        proofs: updatedProofs
      };
    });
  };

  const completeDay = (dayNumber) => {
    setState(prev => {
      const isAlreadyCompleted = prev.student.completedDays.includes(dayNumber);
      const newCompletedDays = isAlreadyCompleted
        ? prev.student.completedDays
        : [...prev.student.completedDays, dayNumber].sort((a, b) => a - b);
      
      const newStreak = isAlreadyCompleted ? prev.student.streak : prev.student.streak + 1;
      
      const updatedProofs = {
        ...prev.proofs,
        [dayNumber]: {
          ...(prev.proofs[dayNumber] || {}),
          completed: true,
          completedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        }
      };

      return {
        ...prev,
        student: {
          ...prev.student,
          completedDays: newCompletedDays,
          streak: newStreak
        },
        proofs: updatedProofs
      };
    });
  };

  const setMode = (mode) => {
    setState(prev => {
      let updatedStudent = { ...prev.student };
      if (mode === 'firstday') {
        updatedStudent = {
          ...updatedStudent,
          currentDay: 1,
          streak: 0,
          completedDays: []
        };
      } else if (mode === 'normal' || mode === 'recovery') {
        updatedStudent = {
          ...updatedStudent,
          currentDay: 12,
          streak: 11,
          completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        };
      }
      return {
        ...prev,
        activeMode: mode,
        student: updatedStudent
      };
    });
  };

  const updateStudentProfile = (profileData) => {
    setState(prev => ({
      ...prev,
      student: {
        ...prev.student,
        ...profileData
      }
    }));
  };

  const resetAll = () => {
    setState(initialMockState);
    saveStoredState(initialMockState);
  };

  return {
    state,
    student: state.student,
    proofs: state.proofs,
    activeMode: state.activeMode,
    updateProof,
    completeDay,
    setMode,
    updateStudentProfile,
    resetAll
  };
}
