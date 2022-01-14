package webRealTime.editor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class EditorApplication {

    public static void main(String[] args) {
        SpringApplication.run(EditorApplication.class, args);
    }

}
