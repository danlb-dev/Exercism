import java.util.List;

class HighScores {
    private final List<Integer> highScores;

    public HighScores(List<Integer> highScores) {
        this.highScores = highScores;
    }

    List<Integer> scores() {
        return this.highScores;
    }

    Integer latest() {
        return this.highScores.getLast();
    }

    Integer personalBest() {
        Integer bestScore = this.highScores.stream().sorted().toList().getLast();
        return  bestScore;
    }

    List<Integer> personalTopThree() {
        List<Integer> sortedScores = this.highScores.stream().sorted().toList().reversed();
        List<Integer> bestTopThree = (sortedScores.size() >= 3) ? sortedScores.subList(0, 3): sortedScores;
        return bestTopThree;
    }
}