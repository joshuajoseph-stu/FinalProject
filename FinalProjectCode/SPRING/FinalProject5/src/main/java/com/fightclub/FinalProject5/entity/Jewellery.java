package com.fightclub.FinalProject5.entity;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
public class Jewellery {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	private int jId;
	
	private String jName;
	private double jPrice;
	private String jMaterial;
	private String jSKU;
	
	public Jewellery() {
		// TODO Auto-generated constructor stub
	}

	public Jewellery(int jId, String jName, double jPrice, String jMaterial, String jSKU) {
		super();
		this.jId = jId;
		this.jName = jName;
		this.jPrice = jPrice;
		this.jMaterial = jMaterial;
		this.jSKU = jSKU;
	}

	@Override
	public String toString() {
		return "Jewellery [jId=" + jId + ", jName=" + jName + ", jPrice=" + jPrice + ", jMaterial=" + jMaterial
				+ ", jSKU=" + jSKU + "]";
	}

	public int getjId() {
		return jId;
	}

	public void setjId(int jId) {
		this.jId = jId;
	}

	public String getjName() {
		return jName;
	}

	public void setjName(String jName) {
		this.jName = jName;
	}

	public double getjPrice() {
		return jPrice;
	}

	public void setjPrice(double jPrice) {
		this.jPrice = jPrice;
	}

	public String getjMaterial() {
		return jMaterial;
	}

	public void setjMaterial(String jMaterial) {
		this.jMaterial = jMaterial;
	}

	public String getjSKU() {
		return jSKU;
	}

	public void setjSKU(String jSKU) {
		this.jSKU = jSKU;
	}

	
	
}
