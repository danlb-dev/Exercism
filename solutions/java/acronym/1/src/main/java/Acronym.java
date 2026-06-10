import java.util.*;

class Acronym {
    private final String iPhrase;

    Acronym(String phrase) {
        this.iPhrase = phrase;
    }

    String get() {
        String[][] words = Arrays.stream(this.iPhrase.split(" |-"))
                .map(w -> w.toUpperCase().replaceAll("[^0-9A-Z]", "").split(""))
                .toArray(String[][]::new);

        String acronym = "";
        for(String[] w: words){
            acronym += w[0];
        }

        return acronym;
    }
}