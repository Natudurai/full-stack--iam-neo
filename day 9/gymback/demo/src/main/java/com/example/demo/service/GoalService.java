package com.example.demo.service;

import com.example.demo.model.Goal;
import com.example.demo.repository.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GoalService {

    @Autowired
    private GoalRepository goalRepository;

    public Goal saveGoal(Goal goal) {
        return goalRepository.save(goal);
    }

    public Optional<Goal> getGoalById(Long id) {
        return goalRepository.findById(id);
    }

    public List<Goal> getAllGoals() {
        return goalRepository.findAll();
    }

    public void deleteGoal(Long id) {
        goalRepository.deleteById(id);
    }
}
