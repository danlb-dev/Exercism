public class ResistorColorDuo {
    public int value(String[] colors) {
        String value = "";
        for(int i=0; i < colors.length; i++){
            String val = this.getColorValue(colors[i]);
            if(val.isBlank() || value.isBlank() && val.equals("0")){
                continue;
            }
            else if(value.length() == 2){
                break;
            }
            value += val;
        }
        return Integer.parseInt(value);
    }
    
    private String getColorValue(String color){
        String value = "";
        switch (color.toLowerCase()){
            case "black":
                value = "0";
                break;
            case "brown":
                value = "1";
                break;
            case "red":
                value = "2";
                break;
            case "orange":
                value = "3";
                break;
            case "yellow":
                value = "4";
                break;
            case "green":
                value = "5";
                break;
            case "blue":
                value = "6";
                break;
            case "violet":
                value = "7";
                break;
            case "grey":
                value = "8";
                break;
            case "white":
                value = "9";
                break;
        }
        return value;
    }
}