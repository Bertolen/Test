package javaTest;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JTextField;

public class BoutonFichier extends JButton implements MouseListener {

	JFileChooser fc;
	JTextField texte;
	
	public BoutonFichier(String str){
		super(str);
		this.addMouseListener(this);
		texte = null;
		fc = new JFileChooser();
	}
	
	public void setTextField(JTextField t){
		texte = t;
	}
	
	@Override
	public void mouseClicked(MouseEvent e) {
		
		if(texte != null){
			int fileChoice = fc.showOpenDialog(this.getParent());
			
			if(fileChoice == JFileChooser.APPROVE_OPTION){
				texte.setText(fc.getSelectedFile().getPath());
			}
		}
		
	}

	@Override
	public void mouseEntered(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mouseExited(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mousePressed(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mouseReleased(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

}
