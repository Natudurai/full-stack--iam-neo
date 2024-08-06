package com.example.demo.service;

import com.example.demo.model.Workout;
import com.example.demo.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    public Workout saveWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public Optional<Workout> getWorkoutById(Long id) {
        return workoutRepository.findById(id);
    }

    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public void deleteWorkout(Long id) {
        workoutRepository.deleteById(id);
    }
}
