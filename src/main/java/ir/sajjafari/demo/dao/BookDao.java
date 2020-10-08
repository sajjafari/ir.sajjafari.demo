package ir.sajjafari.demo.dao;

import ir.sajjafari.demo.entities.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookDao extends JpaRepository<BookEntity, Long> {
}
