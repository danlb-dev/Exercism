class Leap {
    boolean isLeapYear(int year) {
        boolean isDivBy4 = year % 4 == 0;
        boolean isDivBy100 = year % 100 == 0;
        boolean isDivBy400 = year % 400 == 0;
        boolean isLeapYear = (isDivBy4 && !isDivBy100 || isDivBy4 && isDivBy100 && isDivBy400);
        return isLeapYear;
    }
}
