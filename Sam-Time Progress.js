const m_width=125
const m_height=5
const m_lishWidget = new ListWidget()
m_lishWidget.backgroundColor=new Color("#222222")

const m_nowDate = new Date()
const m_weekday = m_nowDate.getDay() == 0 ? 6 : m_nowDate.getDay() - 1
const m_minutes=m_nowDate.getMinutes() 

//IF
if(Device.locale() == "zh_CN")
{
  getwidget(24*60, (m_nowDate.getHours() + 1)*60 + m_minutes, "今日")
  getwidget(7, m_weekday + 1, "本周")
  getwidget(30, m_nowDate.getDate() + 1, "本月")
  getwidget(12, m_nowDate.getMonth() + 1, "今年")
}
else
{
  getwidget(24*60, (m_nowDate.getHours() + 1)*60+m_minutes, "Today")
  getwidget(7, m_weekday + 1, "This week")
  getwidget(30, m_nowDate.getDate() + 1, "This month")
  getwidget(12, m_nowDate.getMonth() + 1, "This year")
}


Script.setWidget(m_lishWidget)
Script.complete()

m_lishWidget.presentMedium()


function getwidget(total, haveGone, str) 
{
  const titlew = m_lishWidget.addText(str)
  titlew.textColor = new Color("#e587ce")
  titlew.font = Font.boldSystemFont(13)
  m_lishWidget.addSpacer(6)
  const imgw = m_lishWidget.addImage(creatProgress(total,haveGone))
  imgw.imageSize=new Size(m_width, m_height)
  m_lishWidget.addSpacer(6)
}

function creatProgress(total,havegone)
{
  const context =new DrawContext()
  context.size=new Size(m_width, m_height)
  context.opaque=false
  context.respectScreenScale=true
  context.setFillColor(new Color("#48484b"))
  const path = new Path()
  path.addRoundedRect(new Rect(0, 0, m_width, m_height), 3, 2)
  context.addPath(path)
  context.fillPath()
  context.setFillColor(new Color("#ffd60a"))
  const path1 = new Path()
  path1.addRoundedRect(new Rect(0, 0, m_width*havegone/total, m_height), 3, 2)
  context.addPath(path1)
  context.fillPath()
  return context.getImage()
}

