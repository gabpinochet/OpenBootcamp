public class Main {
    public static void main(String[] args) {

        int numeroIf = 10;
        int numeroWhile = 0;
        int numeroFor;
        var estacion = "verano";


        //Condición If
        if (numeroIf < 0){
            System.out.println("Este número es negativo");
        } else if (numeroIf > 0) {
            System.out.println("Este número es positivo");
        } else{
            System.out.println("Este número es 0");
        }

        //Bucle While
        while (numeroWhile < 3){
            System.out.println(numeroWhile);
            numeroWhile++;
        }

        //Bucle DoWhile
        do{
            System.out.println(numeroWhile);
        } while (numeroWhile < 3);

        //Bucle For
        for(numeroFor = 0; numeroFor <= 3; numeroFor++){
            System.out.println(numeroFor);
        }

        //Switch Case
        switch (estacion){
            case "verano":
                System.out.println("Estamos en " + estacion);
                break;
            case "otoño":
                System.out.println("Estamos en " + estacion);
                break;
            case "invierno":
                System.out.println("Estamos en " + estacion);
                break;
            case "primavera":
                System.out.println("Estamos en " + estacion);
                break;
            default:
                System.out.println("No estamos en ninguna estación concreta");
        }
    }
}