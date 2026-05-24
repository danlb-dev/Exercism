public class Twofer {
    public String twofer(String name) {
        String personName = (name == null) ? "you" : name;
        return "One for " + personName + ", one for me.";
    }
}