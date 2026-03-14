import TimeAnchor from '@/components/TimeAnchor';
import EncouragementToast from '@/components/EncouragementToast';
import { Heart, User, Baby, CheckCircle, Clock, Calendar, Home, AlertTriangle, Shield, Star, Activity, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import CareGuideCard from '@/components/CareGuideCard';
const Index = () => {
  const [activeSection, setActiveSection] = useState('before');
  const [showEncouragement, setShowEncouragement] = useState(false);

  useEffect(() => {
    // 检查是否是当天第一次打开应用
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisitDate');

    if (lastVisit !== today) {
      setShowEncouragement(true);
      localStorage.setItem('lastVisitDate', today);

      // 3秒后隐藏鼓励消息
      setTimeout(() => {
        setShowEncouragement(false);
      }, 3000);
    }
  }, []);

  // 护理指南数据
  const careGuideData = [
  {
    id: 'before',
    title: '手术前一天',
    icon: <Calendar className="h-5 w-5" />,
    items: [
    { text: '1. 带老婆吃一顿她想吃的大餐（术后一个月不能出门乱吃，这是最后机会）', completed: false },
    { text: '2. 两人一起清点待产包，确认物品位置，你要知道每样东西在哪', completed: false },
    { text: '3. 术前8小时禁食禁水，帮她记好时间', completed: false },
    { text: '4. 给老婆做好心理建设，告诉她你会一直在外面等她', completed: false }]

  },
  {
    id: 'day',
    title: '手术当天',
    icon: <Activity className="h-5 w-5" />,
    items: [
    {
      text: '1. 送进手术室前：陪老婆做好术前检查和签字手续',
      subItems: [
      '老婆要自己走进手术室，进去后要插尿管、打麻药、剖七层再缝合，非常无助害怕',
      '送她进去时给她加油鼓劲，说"我在外面等你"',
      '提前把闲杂亲戚请走，不要让一堆人围着'],

      completed: false
    },
    {
      text: '2. 在手术室外等待',
      subItems: [
      '不要离开！不要听长辈说"去吃饭吧"，就在门口等',
      '宝宝先出来，给宝宝拍照记录，然后让其他家人陪宝宝，你继续等老婆出来'],

      completed: false
    },
    {
      text: '3. 老婆出手术室后（第1天）',
      subItems: [
      '第一句话说"辛苦了"，条件允许送一束花或准备一份小礼物',
      '老婆下半身光着，提前清场，把无关人员请出病房',
      '帮老婆换衣服、擦掉血渍',
      '推老婆回病房时，避开空调直吹和走廊漏风处',
      '护士来按压子宫（排恶露）时超级痛——紧握老婆的手，教她鼻子深吸气、嘴巴小口吐气减轻痛感，全程陪着她',
      '术后不能喝水，用棉签蘸水帮她湿润嘴唇',
      '每隔2小时帮老婆翻身，动作要轻，没事就给她按摩腿部'],

      completed: false
    }]

  },
  {
    id: 'hospital',
    title: '住院期间（第2-5天）',
    icon: <Home className="h-5 w-5" />,
    items: [
    {
      text: '第2天',
      subItems: [
      '宫缩很痛，不是矫情，多安慰',
      '护士拔尿管时不要让亲戚围观，拔完后多给老婆喝水',
      '准备小米粥、白萝卜汤、鸡蛋汤，用小勺慢慢喂',
      '24小时后尽快扶老婆下地走动，动作一定要轻要慢，拉扯伤口非常痛',
      '带宝宝洗澡、打疫苗，全程盯紧宝宝'],

      completed: false
    },
    {
      text: '第3天',
      subItems: [
      '老婆继续挂缩宫素+喂奶时宫缩，双重痛，理解体谅，不要抱怨',
      '伤口开始发痒，提醒老婆不要抓挠，保持伤口干燥，勤换纱布',
      '产后虚汗多，帮老婆擦干、换干净衣物，避免着凉',
      '奶水少是正常的，坚持让宝宝多吮吸，不要催奶、不要制造焦虑',
      '拒绝亲朋好友探视，产妇和宝宝都很虚弱，容易被传染'],

      completed: false
    },
    {
      text: '第4-5天（出院）',
      subItems: [
      '提前办好出院手续，了解各种注意事项',
      '给宝宝穿好衣服、戴好帽子、用包被包好',
      '给老婆绑好收腹带，扶她慢慢走',
      '给老婆戴好帽子，避免吹风',
      '开车回家不要走颠簸的路',
      '买好开塞露（产后容易便秘）'],

      completed: false
    }]

  },
  {
    id: 'home',
    title: '月子期间（回家后）',
    icon: <Baby className="h-5 w-5" />,
    items: [
    {
      text: '身体护理',
      subItems: [
      '老婆以休息为主，6个月内避免劳累',
      '帮老婆记录喂奶时间、宝宝大小便次数',
      '伤口护理：保持干燥，按医嘱换药，观察有无红肿渗液',
      '产后便秘：多准备开塞露，饮食上多吃蔬菜',
      '产后出汗多：勤换衣物，注意保暖但不要捂太热'],

      completed: false
    },
    {
      text: '饮食安排',
      subItems: [
      '前几天：小米粥、白萝卜汤（排气）、鸡蛋汤、藕粉',
      '排气后：逐步增加营养，鸡汤、鱼汤、猪蹄汤（催奶）',
      '不要过早大补，容易堵奶',
      '老婆想吃什么尽量满足，不要限制太多'],

      completed: false
    },
    {
      text: '带娃分工',
      subItems: [
      '主动承担夜间带娃，至少分担一半',
      '宝宝洗澡、换尿布、哄睡——这些你都要会',
      '老婆喂奶时，保护隐私，不让任何人围观，也不要问"有没有奶"这种制造焦虑的问题'],

      completed: false
    },
    {
      text: '情绪支持（非常重要！）',
      subItems: [
      '产后激素骤降，老婆情绪不稳定是正常的，不要觉得她矫情',
      '多说"你辛苦了""你做得很好""宝宝有你真幸福"',
      '婆家和娘家有冲突时，无条件站老婆，这时候她最虚弱',
      '不要让任何人问"有没有奶""怎么还没奶"——这是大忌'],

      completed: false
    },
    {
      text: '家务管理',
      subItems: [
      '月子期间家务全包，不要让老婆动手',
      '提前联系好月嫂或请双方父母帮忙，分工明确',
      '控制探视人数和时间，老婆累了就送客'],

      completed: false
    }]

  },
  {
    id: 'warnings',
    title: '⚠️ 最容易结"月子仇"的雷区',
    icon: <AlertTriangle className="h-5 w-5" />,
    items: [
    { text: '1. 带老婆吃一顿她想吃的大餐（术后一个月不能出门乱吃，这是最后机会）', completed: false },
    { text: '2. 两人一起清点待产包，确认物品位置，你要知道每样东西在哪', completed: false },
    { text: '3. 术前8小时禁食禁水，帮她记好时间', completed: false },
    { text: '4. 给老婆做好心理建设，告诉她你会一直在外面等她', completed: false },
    { text: '5. 月子里甩手不管，让老婆一个人带娃', completed: false },
    { text: '6. 拒绝过度探视，让老婆精疲力竭应付亲戚', completed: false }]

  }];


  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    // 滚动到对应部分
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa]/60 to-[#bbdefb]/60 pb-20">
      <header className="bg-white sticky top-0 z-10 border-b border-[#00000000]">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-display-sm text-center text-gray-900">准爸爸剖腹产护理助手</h1>
          <p className="text-center text-caption-lg text-gray-500">陪伴是最好的照顾</p>
        </div>
      </header>

      <TimeAnchor
        sections={careGuideData}
        activeSection={activeSection}
        onSectionChange={handleSectionChange} />


      <main className="container mx-auto px-4 py-4 border-t-rose-100 border-b-rose-100 border-l-rose-100 border-r-rose-100">
        <div className="mb-3 text-center">
          <img src="https://s3plus.meituan.net/mcopilot-pub/nocode_image/default/jimeng-2026-03-13-3649-极简卡通风格，一家三口正视图头像，戴眼镜的长发妈妈，戴眼镜的爸爸，脸型更圆润的爸...-sejo4574hn6vam3af28l7rwe94rcy2.png"

          alt="准爸爸照顾新生儿" className="mx-auto object-cover rounded-lg shadow-sm h-48 w-full max-w-md" />


          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-left text-[13px]">你现在的每一点照顾，都是给感情存钱。加油，准爸爸！ 💪

          </p>
        </div>

        <div className="space-y-4">
          {careGuideData.map((section, index) =>
          <div key={section.id} id={section.id}>
              <CareGuideCard
              title={section.title}
              icon={section.icon}
              items={section.items}
              isLast={index === careGuideData.length - 1} />

            </div>
          )}
        </div>
      </main>

      {showEncouragement && <EncouragementToast />}
    </div>);
};

export default Index;
