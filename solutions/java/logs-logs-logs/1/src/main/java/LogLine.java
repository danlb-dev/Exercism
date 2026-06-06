public class LogLine {
    private final String logLine;

    LogLine(String logLine){
        this.logLine = logLine;
    }

    public LogLevel getLogLevel(){
        int sIndex = this.logLine.indexOf("[") + 1;
        int fIndex = this.logLine.indexOf("]");
        String logLevel = this.logLine.substring(sIndex, fIndex);

        LogLevel result;

        switch (logLevel){
            case "TRC":
                result = LogLevel.TRACE;
                break;
            case "DBG":
                result = LogLevel.DEBUG;
                break;
            case "INF":
                result = LogLevel.INFO;
                break;
            case "WRN":
                result = LogLevel.WARNING;
                break;
            case "ERR":
                result = LogLevel.ERROR;
                break;
            case "FTL":
                result = LogLevel.FATAL;
                break;
            default:
                result = LogLevel.UNKNOWN;
                break;
        }

        return result;
    }

    public String getOutputForShortLog(){
        String fLogLine = this.logLine.substring(this.logLine.indexOf(":") + 1).trim();
        int shortFormatCode = (this.getLogLevel()).getShortFormat();
        String shortLog = (Integer.toString(shortFormatCode) + ":" + fLogLine);
        return shortLog;
    }
}