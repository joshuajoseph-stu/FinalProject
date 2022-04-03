package com.fightclub.FinalProject5.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fightclub.FinalProject5.entity.Jewellery;

@Repository
public interface JewelleryRepository extends JpaRepository<Jewellery, Integer>{

//	Optional<List<Jewellery>> findByName(String jName);
}
