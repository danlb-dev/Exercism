import java.util.Map;
import java.util.HashMap;

public class DialingCodes {
    private final Map<Integer, String> map;

    public DialingCodes(){
        this.map = new HashMap<>();
    }

    public Map<Integer, String> getCodes() {
        return this.map;
    }

    public void setDialingCode(Integer code, String country) {
        this.map.put(code, country);
    }

    public String getCountry(Integer code) {
        return this.map.get(code);
    }

    public void addNewDialingCode(Integer code, String country) {
        if(!this.map.containsKey(code) && !this.map.containsValue(country)){
            this.setDialingCode(code, country);
        }
    }

    public Integer findDialingCode(String country) {
        Integer dialCode = null;

        if(this.map.containsValue(country)){
            var entry = this.map.entrySet().stream()
                    .filter(x -> x.getValue() == country).findFirst();
            dialCode = entry.get().getKey();
        }

        return dialCode;
    }

    public void updateCountryDialingCode(Integer code, String country) {
        if(this.map.containsValue(country)){
            int currentKey = this.map.entrySet().stream()
                    .filter(x -> x.getValue() == country)
                    .findFirst()
                    .get().getKey();
            this.map.remove(currentKey);
            this.map.put(code, country);
        }
    }
}