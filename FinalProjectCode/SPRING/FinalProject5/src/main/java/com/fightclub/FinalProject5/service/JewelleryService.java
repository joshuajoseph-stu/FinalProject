package com.fightclub.FinalProject5.service;

import java.util.List;
import java.util.Optional;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fightclub.FinalProject5.entity.Jewellery;
import com.fightclub.FinalProject5.repository.JewelleryRepository;


@Service
public class JewelleryService {
	
	@Autowired
	private JewelleryRepository jewelleryRepository;
	

	public Jewellery saveJewellery(Jewellery jewellery) {
		return jewelleryRepository.save(jewellery);
	}
	
	public Jewellery updateJewellery(Jewellery jewellery, int jId) {
		Jewellery jewelleryt = jewelleryRepository.findById(jId).get();
		if (Objects.nonNull(jewellery.getjName()) && !"".equalsIgnoreCase(jewellery.getjName())) {
			jewelleryt.setjName(jewellery.getjName());
		}
		if (Objects.nonNull(jewellery.getjPrice())) {
			jewelleryt.setjPrice(jewellery.getjPrice());
		}
		if (Objects.nonNull(jewellery.getjMaterial()) && !"".equalsIgnoreCase(jewellery.getjMaterial())) {
			jewelleryt.setjMaterial(jewellery.getjMaterial());
		}
		if (Objects.nonNull(jewellery.getjSKU()) && !"".equalsIgnoreCase(jewellery.getjSKU())) {
			jewelleryt.setjSKU(jewellery.getjSKU());
		}
		return jewelleryRepository.save(jewelleryt);
	}
		
	
//	  @Override
//    public Department
//    updateDepartment(Department department,
//                     Long departmentId)
//    {
//        Department depDB
//            = departmentRepository.findById(departmentId)
//                  .get();
//  
//        if (Objects.nonNull(department.getDepartmentName())
//            && !"".equalsIgnoreCase(
//                department.getDepartmentName())) {
//            depDB.setDepartmentName(
//                department.getDepartmentName());
//        }
//  
//        if (Objects.nonNull(
//                department.getDepartmentAddress())
//            && !"".equalsIgnoreCase(
//                department.getDepartmentAddress())) {
//            depDB.setDepartmentAddress(
//                department.getDepartmentAddress());
//        }
//  
//        if (Objects.nonNull(department.getDepartmentCode())
//            && !"".equalsIgnoreCase(
//                department.getDepartmentCode())) {
//            depDB.setDepartmentCode(
//                department.getDepartmentCode());
//        }
//  
//        return departmentRepository.save(depDB);
//    }
	
	public void deleteJewellery(int jId) {
		jewelleryRepository.deleteById(jId);
	}
	
	public Optional<Jewellery> getJewelleryById(int jId) {
		return	jewelleryRepository.findById(jId);
		}
//	public Optional<List<Jewellery>> getJewelleryByName(String name) {
//		return jewelleryRepository.findByName(name);
//	}

	public List<Jewellery> getAllJewellery() {
		return jewelleryRepository.findAll();

	}
	
}

