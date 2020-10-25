package ir.sajjafari.demo.rest.sample.book;

import ir.sajjafari.demo.dao.BookRepository;
import ir.sajjafari.demo.entities.BookEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("book")
@CrossOrigin(origins="http://localhost:3000")
public class BookController {

	@Autowired
	private BookRepository bookDao;

	@GetMapping(path = "/loadAll")
	public List<BookEntity> loadAll() {
		return bookDao.findAll();
	}

	@GetMapping(path = "/load/{id}")
	public BookEntity load(@PathVariable Long id) {
		return bookDao.findById(id).orElse(null);
	}

	@GetMapping(path = "/load}")
	public BookEntity load() {
		return new BookEntity();
	}

	@DeleteMapping(path="/delete/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		bookDao.deleteById(id);
		return ResponseEntity.noContent().build();
	}


	@PostMapping(path = "/save")
	public ResponseEntity<BookEntity> saveOrUpdate(@RequestBody BookEntity book) {
		bookDao.save(book);
		return new ResponseEntity<>(book, HttpStatus.OK);
	}

}
