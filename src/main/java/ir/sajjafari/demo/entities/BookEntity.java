package ir.sajjafari.demo.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class BookEntity {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne(targetEntity = UserEntity.class)
	@JoinColumn(name = "USER_ID")
	private UserEntity user;
	private String description;
	private Date targetDate;
	private boolean isDone;

	public BookEntity() {
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookEntity other = (BookEntity) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
