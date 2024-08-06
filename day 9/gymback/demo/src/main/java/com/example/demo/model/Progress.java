package com.example.demo.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "progress")
public class Progress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @Column
    private Date date;

    @Column
    private Integer weight;

    @Column
    private Integer chestMeasurement;

    @Column
    private Integer waistMeasurement;

    @Column
    private Integer hipsMeasurement;

    @Column
    private String notes;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getChestMeasurement() {
        return chestMeasurement;
    }

    public void setChestMeasurement(Integer chestMeasurement) {
        this.chestMeasurement = chestMeasurement;
    }

    public Integer getWaistMeasurement() {
        return waistMeasurement;
    }

    public void setWaistMeasurement(Integer waistMeasurement) {
        this.waistMeasurement = waistMeasurement;
    }

    public Integer getHipsMeasurement() {
        return hipsMeasurement;
    }

    public void setHipsMeasurement(Integer hipsMeasurement) {
        this.hipsMeasurement = hipsMeasurement;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

