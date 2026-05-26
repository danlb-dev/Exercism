import java.util.*;
import java.util.stream.Collectors;

enum Colors {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white
}

class ResistorColor {
    private final String[] colorsArray;

    public ResistorColor(){
        this.colorsArray = Arrays.stream(Colors.values()).map(x -> x.name()).toArray(String[]::new);
    }

    int colorCode(String color) {
        return Arrays.asList(this.colorsArray).indexOf(color);
    }

    String[] colors() {
        return this.colorsArray;
    }
}