package validate;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Parameters extends HttpServlet{
	
	public void doPost(HttpServletRequest req ,HttpServletResponse res) throws IOException
	{
		res.setContentType("text/html");
		PrintWriter pw=res.getWriter();
		
		String fullname=req.getParameter("fullname");
		String  dob=req.getParameter("dob");
		String gender=req.getParameter("gender");
		String maritial=req.getParameter("maritial");
		String phone=req.getParameter("phone");
		String  email=req.getParameter("email");
		String address=req.getParameter("address");
		String designation=req.getParameter("designation");
		String currentctc=req.getParameter("currentctc");
		String currentlocation=req.getParameter("currentlocation");
		String requiredlocation =req.getParameter("requiredlocation");
		String experiance=req.getParameter("experience");
		String appliedjob=req.getParameter("appliedjob");
		String skills=req.getParameter("skills");
		String projecttitle[]=req.getParameterValues("title[]");
		String startdate[]=req.getParameterValues("startdate[]");
		String enddate[]=req.getParameterValues("enddate[]");
		String projectdesc[]=req.getParameterValues("projects[]");
		String acheivements[]=req.getParameterValues("Acheivements[]");
		String schoolname=req.getParameter("schoolname");
		String schoolper=req.getParameter("schoolper");
		String schoolpassyear=req.getParameter("schoolpassyear");
		String Board=req.getParameter("Board");
		String collegename=req.getParameter("collegename");
		String collegeper=req.getParameter("collegeper");
		String collegepassyear=req.getParameter("collegepassyear");
		String gradcoursetype=req.getParameter("Coursetype");
		String gradcollegename=req.getParameter("gradcollegename");
		String gradcollegeper=req.getParameter("gradcollegeper");
		String gradcollegepassyear=req.getParameter("gradcollegepassyear");
		String postCoursetype=req.getParameter("postCoursetype");
		String postgradcollegename=req.getParameter("postgradcollegename");
		String postgradcollegeper=req.getParameter("postgradcollegeper");
		String postgradcollegepassyear=req.getParameter("postgradcollegepassyear");
		
		pw.println(fullname+" <br>  "+dob+" <br> "+gender+"  <br> "+maritial+"<br> "+phone+"  <br> "
				+ "  <br>"+email+" <br>  "+address+"  <br> "+designation+" <br>  "+currentctc+" <br>  "+currentlocation+" <br>  "+requiredlocation+"<br>"
						+ "  <br> "+experiance+"  <br> "+appliedjob+" <br>  "+skills+" <br> "
								+ " <br>"+schoolname+"<br>   "+schoolper+" <br>  "+schoolpassyear+"  <br> "+Board+" <br>  "+collegename+" <br>  "+collegeper+"  <br> "+
						collegepassyear+"   "+gradcoursetype+"  <br> "+gradcollegename+" <br> "
								+"<br> "
										+ " <br> "+gradcollegeper+"   <br> "+gradcollegepassyear+"   <br>  "+postCoursetype+"  <br> "+postgradcollegename+"  <br> "+postgradcollegeper+" <br>   "+postgradcollegepassyear+"<br>");
		
		for(int i=0;i<projecttitle.length;i++)
		{
			pw.println(projecttitle[i]+" <br>");
			pw.println(startdate[i]+" <br>");
			pw.println(enddate[i]+" <br>");
			pw.println(projectdesc[i]+" <br>");
		}
		
		for(int i=0;i<acheivements.length;i++)
			pw.println(acheivements[i]+" <br>");
		
		
	}

}
