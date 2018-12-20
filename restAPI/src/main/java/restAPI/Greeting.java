package restAPI;

public class Greeting {

    private final long UUID;
    private String Username;
    private String Firstname;
    private String Lastname;
    private String Phonenumber;
    private String Email;
    private String School;
    private String Password;
    private long Currency;


    public Greeting(long UUID, String Username, String Firstname, String Lastname, String Phonenumber, String Email, String School, String Password, long Currency) {
        this.UUID = UUID;
        this.Username = Username;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.Phonenumber = Phonenumber;
        this.Email = Email;
        this.Password = Password;
        this.School = School;
        this.Currency = Currency;
    }

    public long getUUID() {
        return UUID;
    }
    public String getUsername() {
        return Username;
    }
    public String getFirstname() {
        return Firstname;
    }
    public String getLastname() {
        return Lastname;
    }
    public String getPhonenumber() {
        return Phonenumber;
    }
    public String getEmail() {
        return Email;
    }
    public String getPassword() {
        return Password;
    }
    public String getSchool() {
        return School;
    }
    public long getCurrency() {
        return Currency;
    }
}
