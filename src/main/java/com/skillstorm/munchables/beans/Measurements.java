package com.skillstorm.munchables.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Measurements {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "MEASUREMENT_ID")
public int measurementId;

@Column(name = "MEASUREMENT_AMOUNT")
public String measurement;

public Measurements() {
	super();
	// TODO Auto-generated constructor stub
}
public Measurements(int measurementId, String measurement) {
	super();
	this.measurementId = measurementId;
	this.measurement = measurement;
}
public int getMeasurementId() {
	return measurementId;
}
public void setMeasurementId(int measurementId) {
	this.measurementId = measurementId;
}
public String getMeasurement() {
	return measurement;
}
public void setMeasurement(String measurement) {
	this.measurement = measurement;
}
@Override
public String toString() {
	return "Measurements [measurementId=" + measurementId + ", measurement=" + measurement + "]";
}


}
