package ir.sajjafari.demo.auth;

import ir.sajjafari.demo.entities.JwtAuthenticationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins="http://localhost:3000")
public class BasicAuthenticationController {

//    @Autowired
//    AuthenticationManager authenticationManager;

//    @Autowired
//    JwtTokenProvider tokenProvider;

    @PostMapping("/basicauth")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        loginRequest.getUsername(),
//                        loginRequest.getPassword()
//                )
//        );
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String jwt = tokenProvider.generateToken(authentication);
//        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
        return null;
    }

}