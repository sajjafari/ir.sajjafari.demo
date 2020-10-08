package ir.sajjafari.demo.rest.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/")
	public String helloWorld1() {
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldModel helloWorldBean() {
		return new HelloWorldModel("Hello World");
	}

	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldModel helloWorldPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong");
		return new HelloWorldModel(String.format("Hello World, %s", name));
	}

}
