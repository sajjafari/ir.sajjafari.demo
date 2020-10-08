package ir.sajjafari.demo.rest.sample;

public class HelloWorldModel {
	private String message;

	public HelloWorldModel(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldModel [message=%s]", message);
	}
}
