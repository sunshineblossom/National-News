package cn.edu.dlnu.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

public class CustomDateConverter implements Converter<String, Date>{

	public Date convert(String source) {
		//实现将日期串转换成日期类型,格式是("yyyy-MM-dd HH:ss:mm")
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			System.out.println(source);
			//直接转换
			return simpleDateFormat.parse(source);
		}
		catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//如果参数绑定失败，返回null
		return null;
	}
	
}
