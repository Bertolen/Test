package javaTest;

import java.awt.GridLayout;

import javax.swing.*;

public class Fenetre extends JFrame{
	
	PanneauFichier panneauVieux;
	PanneauFichier panneauNouveau;
	JButton boutonExec;
	
	public Fenetre() {
		//préparation de la fenêtre
		this.setTitle("Ma première fenêtre Java");
		//this.setSize(800,600);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		//Installation des panneaux
		panneauVieux = new PanneauFichier();
		panneauNouveau = new PanneauFichier();
		
		// bouton d'execution
		boutonExec = new JButton("Execution");
		
		// initialisation de la boite
		Box box = Box.createVerticalBox();
		box.add(panneauVieux);
		box.add(panneauNouveau);
		box.add(boutonExec);
		
		// ajout de notre boite dans le panneau principal
		this.getContentPane().add(box);
		
		// tout est finit on peut afficher la fenêtre
		this.setVisible(true);
	}
}
