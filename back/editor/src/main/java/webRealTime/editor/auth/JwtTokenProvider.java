package webRealTime.editor.auth;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {

    //TODO: 감춰야함
    private static final String secretKey = "real_TIME_security018.18.tep";
    private static final long tokenValidMillisecond = 1000L * 60 * 60 * 3000;

    /**
     * @param id       회원의 KEY 값
     * @param userId   회원의 id 값
     * @param userRole 회원의 권한
     * @return assess token
     */
    public String createToken(Long id, String userId, UserRole userRole) {
        Claims claims = Jwts.claims()
                .setSubject(userId)
                .setExpiration(new Date(new Date().getTime() + tokenValidMillisecond));

        claims.put("id", id);
        claims.put("userId", userId);
        claims.put("role", userRole);

        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes())
                .compact();
    }

    private Claims getClaimBody(String token) {
        try {
            return Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(token).getBody();
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
            throw ex;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
            throw ex;
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
            throw ex;
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
            throw ex;
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
            throw ex;
        }
    }
}
