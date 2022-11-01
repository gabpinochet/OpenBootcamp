public class Main {
    public static void main(String[] args) {
        int resultado;
        resultado = suma(10,20, 40);
        System.out.println("El resultado es " + resultado);

        Coche miCoche = new Coche();
        miCoche.aumentarPuertas();
        System.out.println("Este coche tiene " + miCoche.puertas + " puerta.");
    }

    public static int suma(int a, int b, int c){
        return a + b + c;
    }
}

class Coche {
    public int puertas = 0;

    public void aumentarPuertas() {
        this.puertas++;
    }
}