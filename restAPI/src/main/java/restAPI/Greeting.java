package restAPI;

public class Greeting {

    private final long id;
    private final String content;
    private final String a;
    private final String b;
    private final String c;
    private final String d;
    private final String e;


    public Greeting(long id, String content, String a, String b, String c, String d, String e) {
        this.id = id;
        this.content = content;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }

    public long getId() {
        return id;
    }
    public String getA() {
        return a;
    }
    public String getB() {
        return b;
    }
    public String getC() {
        return c;
    }
    public String getD() {
        return d;
    }
    public String getE() {
        return e;
    }
}
