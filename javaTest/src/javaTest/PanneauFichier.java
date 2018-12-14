package javaTest;

import java.awt.Dimension;
import java.awt.LayoutManager;

import javax.swing.Box;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class PanneauFichier extends JPanel {

	BoutonFichier bouton;
	JTextField texte;
	
	public PanneauFichier() {
		super();
		
		init();
	}

	public PanneauFichier(LayoutManager arg0) {
		super(arg0);
		
		init();
	}

	public PanneauFichier(boolean arg0) {
		super(arg0);
		
		init();
	}

	public PanneauFichier(LayoutManager arg0, boolean arg1) {
		super(arg0, arg1);
		
		init();
	}
	
	private void init(){
		//création du champ de texte texte
		texte = new JTextField();
		texte.setPreferredSize(new Dimension(300,30));
		
		//création du bouton
		bouton = new BoutonFichier("Chercher fichier");
		bouton.setTextField(texte);
		

		// initialisation de la boite
		Box box = Box.createHorizontalBox();
		box.add(texte);
		box.add(bouton);
		this.add(box);
	}

}
