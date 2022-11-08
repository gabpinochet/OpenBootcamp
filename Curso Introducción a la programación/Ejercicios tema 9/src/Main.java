public class Main {
    public static void main(String[] args) {

        Cliente cliente = new Cliente();
        cliente.edad = 40;
        cliente.nombre = "Luis";
        cliente.telefono = 700000000;
        cliente.setCredito(10000);

        Trabajador trabajador = new Trabajador();
        trabajador.edad = 31;
        trabajador.nombre = "Gabriel";
        trabajador.telefono = 600000000;
        trabajador.setSalario(1200);

        System.out.println(cliente.edad);
        System.out.println(cliente.nombre);
        System.out.println(cliente.telefono);
        System.out.println(cliente.getCredito());
        System.out.println(trabajador.edad);
        System.out.println(trabajador.nombre);
        System.out.println(trabajador.telefono);
        System.out.println(trabajador.getSalario());
    }
}

class Persona {
    public int edad;
    public String nombre;
    public int telefono;
}

class Cliente extends Persona{
    private int credito;

    public void setCredito(int credito){
        this.credito = credito;
    }
    public int getCredito(){
        return this.credito;
    }
}

class Trabajador extends Persona{
    private int salario;

    public void setSalario(int salario){
        this.salario = salario;
    }
    public int getSalario(){
        return this.salario;
    }
}