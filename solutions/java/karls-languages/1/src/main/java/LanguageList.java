import java.util.ArrayList;
import java.util.List;

public class LanguageList {
    //the constant value should be into an external config file
    private static final String IS_EXCITING_LANGUAGES = "Java,Kotlin";

    private final List<String> languages;
    private final List<String> isExcitingLanguages;

    public LanguageList(){
        this.languages = new ArrayList<>();
        this.isExcitingLanguages = new ArrayList<>();
        this.fillIsExcitingLanguagesField();
    }

    private void fillIsExcitingLanguagesField(){
        String[] excLangs = IS_EXCITING_LANGUAGES.split(",");
        for(String lg: excLangs){
            this.isExcitingLanguages.add(lg);
        }
    }

    public boolean isEmpty() {
        return this.languages.size() == 0;
    }

    public void addLanguage(String language) {
        if(!this.languages.contains(language)){
            this.languages.add(language);
        }
    }

    public void removeLanguage(String language) {
        int index = this.languages.indexOf(language);
        if(index >= 0){
            this.languages.remove(index);
        }
    }

    public String firstLanguage() {
        String lang = "";
        if(this.languages.size() > 0){
            lang = this.languages.remove(0);
        }
        return lang;
    }

    public int count() {
        return this.languages.size();
    }

    public boolean containsLanguage(String language) {
        return this.languages.contains(language);
    }

    public boolean isExciting() {
        boolean isExc = false;
        Object[] excLgs = this.isExcitingLanguages.toArray();
        for(int i=0; i < excLgs.length; i++){
            if(this.languages.contains(excLgs[i].toString())){
                isExc = true;
                break;
            }
        }
        return isExc;
    }
}