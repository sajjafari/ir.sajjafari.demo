package ir.sajjafari.demo.auth;

import ir.sajjafari.demo.auth.model.JwtAuthenticationResponse;
import ir.sajjafari.demo.auth.model.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins="http://localhost:3000")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider tokenProvider;

//    @Autowired
//    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/basicauth")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }


//    @RequestMapping(value = "${jwt.refresh.token.uri}", method = RequestMethod.GET)
//    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
//        String authToken = request.getHeader("authorization");
//        final String token = authToken.substring(7);
//        String username = jwtTokenUtil.getUsernameFromToken(token);
//        UserDetails user = (JwtUserDetails) jwtInMemoryUserDetailsService.loadUserByUsername(username);
//
//        if (jwtTokenUtil.canTokenBeRefreshed(token)) {
//            String refreshedToken = jwtTokenUtil.refreshToken(token);
//            return ResponseEntity.ok(new JwtTokenResponse(refreshedToken));
//        } else {
//            return ResponseEntity.badRequest().body(null);
//        }
//    }

}